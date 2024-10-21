'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import PersonCall from "@/images/icon/person-call.svg";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IFormInput>({
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <section className="w-80 bg-white rounded-md shadow-md p-5 flex flex-col gap-4">
      <div className="flex gap-2">
        <Image src={PersonCall} alt="Person call" width={20} height={20}/>
        <h3 className="text-secondaryHover font-medium text-base leading-6">Converse com um advogado</h3>
      </div>
      <p className="text-[#7e7e7e] text-sm">Preencha o formulário abaixo e receba nosso contato personalizado:</p>
      <form className="mt-2 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input 
          placeholder="Nome" 
          type="text" 
          {...register("name", { required: "Nome é obrigatório" })} 
          className={`input ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && <span className="text-red-400 text-xs">{(errors.name?.message as string) || ''}</span>}
        
        <Input 
          placeholder="E-mail" 
          type="email" 
          {...register("email", { 
            required: "E-mail é obrigatório", 
            pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" } 
          })} 
          className={`input ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && <span className="text-red-400 text-xs">{(errors.email?.message as string || '')}</span>}
        
        <Input 
          placeholder="Telefone" 
          type="tel" 
          {...register("phone", { required: "Telefone é obrigatório" })} 
          className={`input ${errors.phone ? 'border-red-500' : ''}`}
        />
        {errors.phone && <span className="text-red-400 text-xs">{(errors.phone?.message as string || '')}</span>}
        
        <Textarea 
          placeholder="Mensagem" 
          {...register("message", { required: "Mensagem é obrigatória" })} 
          className={`textarea ${errors.message ? 'border-red-500' : ''}`}
        />
        {errors.message && <span className="text-red-400 text-xs">{(errors.message?.message as string || '')}</span>}
        
        <button 
          type="submit" 
          className="bg-header text-white text-sm font-bold py-3 rounded-md hover:contrast-125 transition-all duration-100 cursor-pointer"
          disabled={!isValid}
        >
          Solicitar especialista
        </button>
      </form>
    </section>
  );
}