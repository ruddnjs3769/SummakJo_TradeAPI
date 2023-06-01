import React from 'react'

type Props = {
	children: React.ReactNode
}
export default function UserLayout({ children }: Props) {
	return (
		<div>
			user page
			{children}
		</div>
	)
}
