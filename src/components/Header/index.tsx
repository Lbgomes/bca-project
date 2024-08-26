import { Link } from 'react-router-dom';
import * as S from './styles'
import * as B from '@styled-icons/bootstrap';
import * as Br from '@styled-icons/boxicons-regular';
import { useState } from 'react';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <S.HeaderContainer>
                <S.Container>
                    <Link to={'/'}>
                        <S.Title ><B.Asterisk size={20} />FESC</S.Title>
                    </Link>
                    <S.Favourite onClick={() => setIsModalOpen(true)} >
                        <Br.Heart aria-label="favourite" />
                    </S.Favourite>
                </S.Container>
            </S.HeaderContainer>

            {isModalOpen && <S.ModalContainer aria-label="modal" >
                <S.Modal aria-label="modal">
                    <S.CloseContainer>
                        <Br.X size={26} onClick={() => setIsModalOpen(false)} />
                    </S.CloseContainer>
                    <S.ModalSubtitle>Made with <Br.Heart size={20} /> by</S.ModalSubtitle>
                    <S.ModalImageContainer>
                        <S.Image src={require('../../assets/me.png')} alt="heart" />
                        <S.ModalDataContainer>
                            <S.ModalTitle>Murilo Gomes</S.ModalTitle>
                            <S.ModalSubtitle>Frontend Software Engineer</S.ModalSubtitle>
                        </S.ModalDataContainer>
                    </S.ModalImageContainer>
                    <S.Button >
                        <Link to={'https://wa.link/mw52wt'} target="_blank">
                            Hire me
                        </Link>
                    </S.Button>
                </S.Modal>
            </S.ModalContainer>}
        </>
    )


}

export default Header