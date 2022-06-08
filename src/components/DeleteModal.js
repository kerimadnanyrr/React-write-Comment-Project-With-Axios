import React, { useState } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { Navigate, useNavigate } from 'react-router-dom';

import api from '../api';

const DeleteModal = ({detail}) => {
    let navigate = useNavigate();

console.log(detail);
    const [open, setOpen] = useState(false);
    const show = () => setOpen(true);
    const close = () => setOpen(false)

    const handleDelete=(id)=>{
        api()
        .delete(`/posts/${id}`)
        .then(res=>{
//modal kapaancak
close();
//push edilicek
navigate(`/`)
        })
    }
    return (
        <React.Fragment>
            <Button color='red' onClick={show}> Sil</Button>
            <Modal size='mini' open={open} onClose={close}>
                <Modal.Header>Yazıyı Sil</Modal.Header>
                <Modal.Content>

                    <p>Emin Misiniz</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={close}>İptal Et</Button>
                    <Button positive icon='delete' labelPosition='right' onClick={()=>handleDelete(detail.id)} Content='Sil'>Evet</Button>

                </Modal.Actions>



            </Modal>

        </React.Fragment>

    )
}

export default DeleteModal