class ThemeLocalStorageHandler {
    static keyTheme: string = "theme";

    static verifyTheme() {
        if ((localStorage.getItem(this.keyTheme))) return;

        localStorage.setItem(this.keyTheme, "light");
    }

    static assigningColorTheme(isChecked: boolean) {
        localStorage.setItem(this.keyTheme, isChecked ? "dark" : "light")
    }
}

export default ThemeLocalStorageHandler;