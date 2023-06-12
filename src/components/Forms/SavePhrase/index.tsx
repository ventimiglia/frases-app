type Props = {
  onSave: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  phrase: string;
}

const SavePhrase = ({onSave, onChange, phrase}: Props) => (
  <form
    className="flex flex-col gap-2 w-full self-center max-w-4xl m-auto"
    onSubmit={onSave}
  >
    <label htmlFor="phrase" className="flex flex-col h-full w-4/5 text-2xl font-bold">
      Agregar frase
    </label>
    <div className="flex md:h-14 shadow-lg flex-col md:flex-row gap-4 md:gap-0">
      <input
        id="phrase"
        name="phrase"
        className="w-full md:w-4/5 text-primary text-3xl px-4 focus:outline-none md:rounded-s-md"
        placeholder="Ahora un poema..."
        onChange={onChange}
        value={phrase}
      />
      <button
        className="w-full md:w-1/5 text-3xl border-2 border-white transition-colors hover:bg-purple-600 md:rounded-e-md"
        type="submit"
      >
        Guardar
      </button>
    </div>
  </form>
);

export default SavePhrase