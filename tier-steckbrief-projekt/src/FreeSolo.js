import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo({ props }) {
    return (
        <Stack spacing={2} sx={{ width: 300 }}>

            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={props.map((option) => option.name)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search Tier"
                        slotProps={{
                            input: {
                                ...params.InputProps,
                                type: 'search',
                            },
                        }}
                    />
                )}
            />
        </Stack>
    );
}

