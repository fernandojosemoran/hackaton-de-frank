class Device {
    static os: string = window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light";
}

export default Device;