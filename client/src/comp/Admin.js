import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Admin({ setVacations, vacations }) {

    const [update, setUpdate] = useState(false);
    const [description, setDescription] = useState("");
    const [destination, setDestination] = useState("");
    const [price, setPrice] = useState();
    const [image, setImage] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");


  

    const addVacation = async () => {
        const res = await fetch('http://localhost:5000/users/1', {
            method: "post",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ description, destination, price, image, startDate, endDate }),
            credentials: "include"
        })
        const data = await res.json()

        if (data.err) {
            alert(data.err)
        } else {
            setVacations([...vacations, { description, destination, price, image, startDate, endDate }])
            setUpdate(upd => !upd)
        }
        console.log(data);

    }


    /// for the popover////
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // end of popover


    return (

        <div>
            <div className='addPost'>

                <Box sx={{ '& > :not(style)': { m: 1 } }}>

                    <Fab color='primary' aria-label="add" onClick={handleClick} sx={{ bgcolor: '#ff8a80' }}>
                        <AddIcon />
                    </Fab>
                    

                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >

                            <TextField sx={{ m: 0.5 }} id="outlined-basic" placeholder={image} label="Image" variant="outlined" size="small" onChange={e => setImage(e.target.value)} />
                            <TextField sx={{ m: 0.5 }} id="outlined-basic" placeholder={destination} label="destination" variant="outlined" size="small" onChange={e => setDestination(e.target.value)} />
                             <TextField sx={{ m: 0.5 }} type="date" id="outlined-basic" variant="standard" onChange={e => setStartDate(e.target.value)} />
                            <TextField sx={{ m: 0.5 }} type="date" id="outlined-basic" variant="standard" onChange={e => setEndDate(e.target.value)} />
                            <TextField sx={{ m: 0.5 }} id="outlined-basic" placeholder={description} label="Descriptions" variant="outlined" size="small" onChange={e => setDescription(e.target.value)} />
                            <TextField sx={{ m: 0.5 }} id="outlined-basic" placeholder={price} label="Price" variant="outlined" size="small" onChange={e => setPrice(e.target.value)} />
                            <Button id="btnvava" variant="contained" onClick={addVacation}>Add Vacations</Button>

                            
                        </Popover>

                    
                </Box>
            </div>
        </div>
    )
}
