'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ChatIcon from '@mui/icons-material/Chat';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import TimerIcon from '@mui/icons-material/Timer';
import FeedIcon from '@mui/icons-material/Feed';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
    const currentPath = usePathname();


    const pathToTabValue: { [key: string]: number } = {
        '/': 0,
        '/tba': 2,
        '/players': 4,
    };
    const [value, setValue] = React.useState(currentPath === '/' ? 0 : pathToTabValue[currentPath]);

    React.useEffect(() => {
        const pathValue = pathToTabValue[currentPath];
        if (pathValue !== undefined) {
            setValue(pathValue);
        }
    }, [currentPath]);

    return (
        <Tabs value={value} onChange={(_e, value) => setValue(value)} centered>
            <Tab
                icon={<HomeIcon />}
                label={"Home"}
                component={Link}
                href="/"
            />
            <Tab
                icon={<FeedIcon />}
                label={"News"}
                component={Link}
                href="/tba"
            />
            <Tab
                icon={<TimerIcon />}
                label={"Trainings"}
                component={Link}
                href="/tba"
            />
            <Tab
                icon={<SportsHockeyIcon />}
                label={"Upcoming Match"}
                component={Link}
                href="/tba"
            />
            <Tab
                icon={<FormatListNumberedIcon />}
                label={"Players"}
                component={Link}
                href="/players"
            />
            <Tab
                icon={<ChatIcon />}
                label={"Chat"}
                component={Link}
                href="/tba"
            />
        </Tabs>
    );
}

export default NavBar;