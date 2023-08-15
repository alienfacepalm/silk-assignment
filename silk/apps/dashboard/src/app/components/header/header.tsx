import React from 'react'

import { Logo } from '../logo'

import './header.css'

export const Header: React.FC = () => (
  <div>
    <header className="sticky top-0">
      <div className="logo">
        <Logo dimensions={{ width: 100, height: 100 }} />
      </div>
    </header>
  </div>
)
