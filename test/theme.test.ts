import { describe, it, expect, beforeEach } from "vitest";
import { useTheme } from "~/composables/useTheme";

describe("Theme Toggle", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("should initialize with system preference", () => {
    // Mock system dark mode preference
    Object.defineProperty(window, "matchMedia", {
      value: (query: string) => ({
        matches: query === "(prefers-color-scheme: dark)",
        addEventListener: () => {},
        removeEventListener: () => {},
      }),
    });

    const { isDarkMode } = useTheme();
    expect(isDarkMode.value).toBe(true);
  });

  it("should toggle theme", () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const initialTheme = isDarkMode.value;

    toggleDarkMode();
    expect(isDarkMode.value).toBe(!initialTheme);

    toggleDarkMode();
    expect(isDarkMode.value).toBe(initialTheme);
  });

  it("should persist theme preference", () => {
    // Set initial preference
    localStorage.setItem("darkMode", "true");

    // First instance should read from localStorage
    const { isDarkMode: firstInstance } = useTheme();
    expect(firstInstance.value).toBe(true);

    // Change the preference
    localStorage.setItem("darkMode", "false");

    // New instance should read updated preference
    const { isDarkMode: secondInstance } = useTheme();
    expect(secondInstance.value).toBe(false);
  });
});
