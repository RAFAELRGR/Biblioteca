import { CreateNewPosts } from "@/services/api"
import { CreatePosts } from "@/types"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"

interface Props{
    onClose: () => void;
}
const initialForm: CreatePosts = { title: "", body: "", userId: 1 };

export  default function CreatePostsNew({ onClose}: Props){
    const [form, setForm] = useState<CreatePosts>(initialForm);
    const [errors, setErrors] = useState<{ title?: string; body?: string }>({});
    const mutation = useMutation({ mutationFn: CreateNewPosts });
      
    function validate(): boolean {
        const newErrors: { title?: string; body?: string } = {};
        if (!form.title.trim()) newErrors.title = "El título es requerido";
        if (!form.body.trim()) newErrors.body = "El contenido es requerido";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
  
    }

    function handleSubmit() {
        if (!validate()) return;
        mutation.mutate(form);
    }
    return (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 backdrop-blur-sm px-4"
        onClick={(e) => e.target === e.currentTarget && !mutation.isPending && onClose()}
    >
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Nuevo libro</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-red-600 text-xl">X</button>
        </div>
        {mutation.isSuccess ? (
            <div className="text-center py-8">
            <p className="text-gray-800 font-semibold text-lg">Libro creado con Exito</p>
            <button onClick={onClose} className="mt-6 bg-green-800 text-white px-6 py-2.5 rounded-xl hover:bg-green-700">
                Cerrar
            </button>
            </div>

        ) : (
            <div className="space-y-4">

            <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Título *</label>
                <input
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="Nombre del Libro"
                className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black ${errors.title ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.title && <p className="text-red-600 text-xs mt-1">{errors.title}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Contenido *</label>
                <textarea
                value={form.body}
                onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
                rows={4}
                placeholder="Descripción..."
                className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none ${errors.body ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.body && <p className="text-red-600 text-xs mt-1">{errors.body}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Usuario</label>
                <select
                value={form.userId}
                onChange={(e) => setForm((f) => ({ ...f, userId: Number(e.target.value) }))}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black"
                >
                {[1, 2, 3, 4, 5].map((id) => (
                    <option key={id} value={id}>Usuario {id}</option>
                ))}
                </select>
            </div>
            {mutation.isError && (
                <p className="text-red-600 text-sm bg-red-50 px-4 py-2 rounded-xl">
                Error al crear el libro. Intenta de nuevo.
                </p>
            )}
            <div className="flex gap-3 pt-2">
                <button
                onClick={onClose}
                className="flex-1 border border-red-300 text-gray-700 px-4 py-2.5 rounded-xl hover:bg-red-100"
                >
                Cancelar
                </button>
                <button
                onClick={handleSubmit}
                disabled={mutation.isPending}
                className="flex-1 bg-green-800 hover:bg-green-700 disabled:opacity-60 text-white font-semibold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2"
                >
                {mutation.isPending ? (
                    <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creando...
                    </>
                ) : "Crear libro"}
                </button>
            </div>

            </div>
        )}

        </div>
    </div>
    );
}