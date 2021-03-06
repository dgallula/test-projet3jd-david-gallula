import { useState } from 'react';
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';

//============ Page showing the vacation no one following====//////

export default function Nonfollow({ nonfollow ,setUpdate}) {

    const [checked, setChecked] = useState(false);



    const addfollow = async () => {
        const res = await fetch('http://localhost:5000/vacations/addfollow', {
            method: "post",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ userid: localStorage.id, vacationsid: nonfollow.id }),
            credentials: "include"
        })
        toggleChecked()
        const data = await res.json()
        if (data.err) {
            alert(data.err)
        } else {
            setUpdate(up => !up)
        }
        console.log(data);

    }




    const toggleChecked = () => {
        setChecked(prev => !prev);
    };


    return (
        <>

            <Card className="card" sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={nonfollow.image}
                    alt={nonfollow.destnation}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {nonfollow.destnation}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {new Date(nonfollow.startDate).toLocaleDateString('he-IL')} - {new Date(nonfollow.endDate).toLocaleDateString('he-IL')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {nonfollow.descriptions}
                    </Typography>
                    <div className='pricefollowers'>
                        <Typography variant="h5">
                            ${nonfollow.price}
                        </Typography>
                        <Checkbox checked={checked} onChange={addfollow} icon={<FavoriteBorder />} checkedIcon={<Favorite color="error"/>} />
                        <Avatar>{nonfollow.NumberVacations}</Avatar>
                    </div>
                </CardContent>

            </Card>
        </>



    )
}
