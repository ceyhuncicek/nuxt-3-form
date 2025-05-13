import { ref, watch } from "vue";

// Initialize theme state
const isDarkMode = ref(false);

// Theme CDN URLs
const LIGHT_THEME_URL =
  "https://nordcdn.net/ds/provetcloud/css/1.1.0/provet.min.css";
const DARK_THEME_URL =
  "https://nordcdn.net/ds/provetcloud/themes/1.0.0/provet-dark.css";

// Function to load theme CSS
const loadThemeCSS = async (dark: boolean) => {
  try {
    // Remove existing theme links
    const existingThemeLinks = document.querySelectorAll(
      "link[data-theme-css]"
    );
    existingThemeLinks.forEach((link) => link.remove());

    // Create and append new link for the selected theme
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.setAttribute("data-theme-css", "true");

    if (dark) {
      link.href = DARK_THEME_URL;
      link.integrity =
        "sha384-Iuru6O5PBD9zuQgQfPdDPG2xi/VOwtaFEoF8TQxXewAqJF70UeXPVaN/TjmRNABQ";
    } else {
      link.href = LIGHT_THEME_URL;
      link.integrity =
        "sha384-1oPScOelquAHG7S9/NvXjf0pzu2XCqVDlTcdBiODTq4frAn/By0t8LStOJuHCN1i";
    }
    link.crossOrigin = "anonymous";

    document.head.appendChild(link);
  } catch (error) {
    console.error("Error loading theme:", error);
  }
};

export const useTheme = () => {
  // Check localStorage first
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode !== null) {
    isDarkMode.value = savedMode === "true";
  } else {
    // If no saved preference, check system preference
    isDarkMode.value = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  }

  // Load initial theme
  loadThemeCSS(isDarkMode.value);

  // Watch for changes
  watch(isDarkMode, (newValue) => {
    localStorage.setItem("darkMode", newValue.toString());
    loadThemeCSS(newValue);
  });

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
};
