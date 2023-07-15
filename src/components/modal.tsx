import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { css } from '@emotion/react'
import { X } from 'react-feather'
import { Theme, useTheme } from '../theme'
import { breakpoints } from '../styles/global'

export const modalRootStyle = (theme: Theme) => css`
position: fixed;
inset: 0;
display: flex;
justify-content: center;
overflow-y: auto;
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
}

.modal {  
  position: relative;
  top: 10%;
  min-width: 32rem;
  z-index: 1060;
  @media (min-width: ${breakpoints.sm}) {
    padding: 1.5rem;  
    min-width: 60rem;
  }
  background-color: ${theme.colors.backgroundPrimary};
  border: none;
  border-radius: .75rem;
  & > .header {
    display: flex;
    padding: 1.6rem;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
    gap: 1rem;
    img {
      height: 2.4rem;
    }
  }

  & > .close {
    position: absolute;
    top: .5rem;
    right: .5rem;
    background: transparent;
    color: ${theme.colors.primary};
    display: grid;
    justify-content: center;
    align-items: center;
    padding: .75rem;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.backgroundSecondary};
      border-radius: 50%;
    }
  }
}
`

type ModalRootOptions =
  HTMLAttributes<HTMLDivElement>
  & {
    header?: ReactNode
    children: ReactNode
    onClose: () => any
    preventBackdropClose?: boolean
  }

const ModalRoot = ({ header, onClose, preventBackdropClose, children, ...rest }: ModalRootOptions) => {
    const theme = useTheme()
    const handleBackdropClose = () => {
      if (preventBackdropClose) return
      onClose()
    }
    return (
      <div css={modalRootStyle(theme)} {...rest}>
        <div className="backdrop" onClick={handleBackdropClose} />
        <div>
          <div className="modal">
            {
              header !== undefined
                ? <div className="header">{header}</div>
                : header
            }
            {children}
            <button onClick={onClose} className="close">
              <X width={20} height={20} />
            </button>
          </div>

        </div>
      </div>
    )
  }

export type ModalOptions =
  ModalRootOptions
  & {
    open: boolean
  }

export const Modal = ({ open, children, ...rest }: ModalOptions) => {
  const [root, setRoot] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = document.body.appendChild(document.createElement('div'))
    setRoot(root)
    return () => {
      setTimeout(() => {
        root.remove()
      }, 0)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!root) return null

  return (
    createPortal(
      open
        ? (
          <ModalRoot {...rest}>
            {children}
          </ModalRoot>
        )
        : null,
      root
    )
  )
}

export default Modal
