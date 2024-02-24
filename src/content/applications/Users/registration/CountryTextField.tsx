import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { citiesList } from './CitiesList';

interface InputItem {
    [key: string]: string[];
}

interface OutputItem {
    city: string;
    state: string;
}

function transformArray(input: InputItem[]): OutputItem[] {
    const result: OutputItem[] = [];

    input.forEach(item => {
        for (const state in item) {
            if (Object.prototype.hasOwnProperty.call(item, state)) {
                item[state].forEach(city => {
                    result.push({ city, state });
                });
            }
        }
    });

    return result;
}

function sleep(duration: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

export default function CountryTextField() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<readonly OutputItem[]>([]);
    const loading = open && options.length === 0;
    const outputArray: OutputItem[] = transformArray(citiesList);
    React.useEffect(() => {
        let active = true;
        console.log(outputArray, "outputArray");
        if (!loading) {
            return undefined;
        }

        (async () => {
            await sleep(1e3); // For demo purposes.

            if (active) {
                setOptions([...outputArray]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            id="asynchronous-demo"
            sx={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            isOptionEqualToValue={(option, value) => option.city === value.city}
            getOptionLabel={(option: any) => option.city.toString()}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Cities"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}