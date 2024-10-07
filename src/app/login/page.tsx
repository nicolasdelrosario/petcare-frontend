"use client"

import { MaxWidthWrapper } from "@/components";
import { buttonVariants } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import Link from "next/link";

export default function Login() {
    return (
        <MaxWidthWrapper className="px-2.5 grid place-content-center">
            <form action="" className="flex flex-col max-w-[350px] gap-3 px-6 py-6">
                <h1 className="text-center mb-4 text-3xl font-bold 
                leading-relaxed tracking-tight text-gray-900 md:text-4xl lg:text-5xl'">
                    Bienvenido
                </h1>
                <div>
                    <Label
                        htmlFor="workspace"
                    >
                        ¿Cual es el nombre de tu clinica?
                    </Label>
                    <Input
                        id="workspace"
                        type="text"
                        placeholder="Clinica"
                        className="outline-none focus-visible:bg-none"
                    ></Input>
                </div>
                <div>
                    <Label
                        htmlFor="email">
                        Correo electronico
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Correo"
                    ></Input>
                </div>
                <div>
                    <Label
                        htmlFor="password">
                        Contraseña
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Contraseña"
                    ></Input>
                </div>
                <Link
                    href="/"
                    className={buttonVariants({
                        className: "mt-4"
                    })}
                >
                    Ingresar
                </Link>
                <a className="text-center text-sm mt-2" href="">¿Olvidaste tu contraseña?</a>
            </form>
        </MaxWidthWrapper>
    )
}