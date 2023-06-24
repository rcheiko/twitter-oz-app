import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { css } from '@emotion/react'
import { X } from 'react-feather'
import { Theme, colors, useTheme } from '../theme'
import { breakpoints } from '../styles/global'

export const modalRootStyle = (theme: Theme) => css`
position: fixed;
z-index: 1300;
right: 0;
bottom: 0;
top: 0;
left: 0;
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

.modal:before {
  content: '';
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #6366AE 0%, #4C8CCA 29.32%, #219DCB 57.71%, #43BC95 89.35%);
  position: absolute;
  top: 0;
  left: 0;
}

.modal {
  z-index: 1060;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 435px;
  border: 2px solid #000;
  border-radius: 4px;
  overflow: hidden;
  padding: .5rem;
  @media (min-width: ${breakpoints.sm}) {
    padding: 1.5rem;    
  }
  @media (max-width: 425px) {
    min-width: initial;
    width: 100%;
  }

  background-color: ${theme.colorScheme === 'dark' ? colors.dark_blue : '#ffffff'};
  background-clip: padding-box;
  border: none;
  border-radius: .5rem;

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
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 1.6rem;
    background: none;
    border: none;
    color: ${theme.colors.primary};
    display: grid;
    justify-content: center;
    align-items: center;

    &:hover {
      color: ${theme.colors.active};
    }
  }
}
`

export const modalStyle = (theme: Theme) => css`
position: relative;
max-width: 42.5rem;
color: ${theme.colors.secondary};

@media (min-width: 640px) {
  display: grid;
}

.header {
  padding: 1.6rem;
  border-bottom: .1rem solid ${theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#eee'};

  img {
    height: 2.2rem;
    width: 2.2rem;
    object-fit: cover;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.4rem;
    width: 100%;
    line-height: 2.3rem;
    font-size: 1.8rem;
    color: ${theme.colors.primary};
    font-weight: 500;
    
    &__asset {
      display: flex;
      gap: 0.2rem;
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
        <div className="backdrop" onClick={handleBackdropClose}></div>
        <div className="modal" role="dialog" tabIndex={-1}>
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
