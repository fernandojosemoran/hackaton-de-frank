import { Device } from "@/infrastructure/constants/index";
import { Switch } from "@mui/material";
import { useState } from "react";
import { ThemeLocalStorageHandler } from "@/infrastructure/helpers";

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';

function SwitcherTheme() {
    const isDarkMode: boolean = Device.os ? true : false;
    const [isChecked, setisChecked] = useState<boolean>(isDarkMode);

    return (
        <Switch
            icon=<WbSunnyIcon />
            checkedIcon=<ModeNightIcon />
            id="switcher-theme-icon"
            defaultChecked={isDarkMode}
            size="medium"
            onClick={() => {
                ThemeLocalStorageHandler.verifyTheme();
                setisChecked(!isChecked)
                ThemeLocalStorageHandler.assigningColorTheme(isChecked)
            }}
        />
    );
};


export default SwitcherTheme;