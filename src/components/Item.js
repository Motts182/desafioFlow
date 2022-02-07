import React, { useContext, useState } from 'react';
import { ContextModal } from '../context/ContextModal';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const Item = ({ country }) => {

    const {setIdCountry} = useContext(ContextModal);

    //CFG MaterialUI
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const [incident, setIncident] = useState(0);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const calIncident = () => {
        setIncident(((country.All.confirmed * 100000) / country.All.population).toFixed())
    }

    return (
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <h2 className='card-header'>{country.All.country}</h2>
                <p />
                <div className='ml-4'>{`Location:  ${country.All.capital_city}`}</div>
                <p />
                <div className='ml-4'>{`Population:  ${country.All.population}`}</div>
                <p />
                <div className='ml-4'>{`Location:  ${country.All.location}`}</div>

                <div className='card-body'>
                    <button
                        type='button'
                        className='btn btn-block btn-primary'
                        onClick={() => {
                            setIdCountry(country.All.country);
                            calIncident();
                            handleOpen();
                        }}
                    >
                        ver informacion
                    </button>
                </div>


                <Modal
                    open={open}
                    onClose={() => {
                        setIdCountry(null);
                        handleClose();
                    }}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2>{country.All.country}</h2>
                        <h3 className="mt-4"> Informacion especifica</h3>
                        <p />
                        {`Casos Confirmados: ${country.All.confirmed}`}
                        <p />
                        {`Casos Recuperados: ${country.All.recovered}`}
                        <p />
                        {`Casos cada 100mil/hb: ${incident}`}
                        <p />
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Item;