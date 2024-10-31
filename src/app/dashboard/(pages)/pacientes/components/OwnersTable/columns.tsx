'use client'

import { Button, buttonVariants } from '@/components/shadcn'
import { Owner } from '@/interfaces/Owner'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, User } from 'lucide-react'
import Link from 'next/link'

export const columns: ColumnDef<Owner>[] = [
	{
		accessorKey: 'name',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Nombre
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			)
		},
	},
	{
		accessorKey: 'dni',
		header: 'DNI',
	},
	{
		accessorKey: 'pets',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Mascotas
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			)
		},
		cell: ({ row }) => {
			const petsCount = row.original.pets?.length
			return <span className='block text-center'>{petsCount}</span>
		},
		enableColumnFilter: false,
	},
	{
		accessorKey: 'email',
		header: 'Correo',
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const owner = row.original
			return (
				<Link
					href={`/dashboard/pacientes/${owner.id}`}
					className={cn(
						buttonVariants({ variant: 'outline' }),
						'w-full cursor-pointer'
					)}
				>
					<User className='mr-2 size-4' />
					Ver Detalles
				</Link>
			)
		},
	},
]
