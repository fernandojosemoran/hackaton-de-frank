class CssVariables {
    private static DOM = document.documentElement;

    static primaryColor: string = getComputedStyle(this.DOM).getPropertyValue('--primary-color').trim();
    static secondaryColor: string = getComputedStyle(this.DOM).getPropertyValue('--secundary-color').trim();
    static tertiaryColor: string = getComputedStyle(this.DOM).getPropertyValue('--tertiary-color').trim();
    static darkModePrimary: string = getComputedStyle(this.DOM).getPropertyValue('--darkMode-color-primary').trim();
    static darkModeSecondary: string = getComputedStyle(this.DOM).getPropertyValue('--darkMode-color-secundary').trim();
    // static darkModeTertiary: string = getComputedStyle(this.DOM).getPropertyValue('--darkmode-color-tertiary').trim();
}

export default CssVariables;