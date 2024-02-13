import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { css } from '@emotion/react'
import { X } from 'react-feather'

import { Theme, useTheme } from '../theme'

const style = (theme: Theme, height: number) => css`
position: fixed;
inset: 0;
display: flex;
justify-content: center;
overflow-y: auto;
z-index: 1;
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
}

.modal {
  position: absolute;
  top: 0;
  min-width: 42.5rem;
  z-index: 1060;
  background-color: ${theme.colors.backgroundPrimary};
  border: none;
  border-radius: .75rem;


  @media (min-height: ${height}px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 425px) {
    min-width: initial;
    width: 100%;
  }
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
    top: .1rem;
    right: .1rem;
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
  const [ref, setRef] = useState<HTMLDivElement | null>()
  const [height, setHeight] = useState(960)

  useEffect(() => {
    if (!ref) return
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries && entries.length > 0) {
        const { height } = entries[0].contentRect
        setHeight(height)
      }
    })
    resizeObserver.observe(ref)
    return () => resizeObserver.disconnect()
  }, [ref])

  const handleBackdropClose = () => {
    if (preventBackdropClose) return
    onClose()
  }
  
  return (
    <div css={style(theme, height)} {...rest}>
      <div className="backdrop" onClick={handleBackdropClose}></div>
      <div className="modal" role="dialog" tabIndex={-1} ref={setRef}>
        {
          header !== undefined
            ? <div className="header">{header}</div>
            : header
        }
        {children}
        <button onClick={onClose} className="close">
          <X width={16} height={16} />
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