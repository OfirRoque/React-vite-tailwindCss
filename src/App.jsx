import ImageBg from "./assets/images/bg-mobile-light.jpg";
import CroosIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    console.log(ImageBg);
    return (
        <div
            className={`bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen`}
        >
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
                        Todo
                    </h1>
                    <button>
                        <MoonIcon
                            fill={"#FFF"}
                            className={"hover:fill-blue-600"}
                        />
                    </button>
                </div>
                <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
                    <span className="rounded-full border-2 inline-block h-6 w-6"></span>
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>
            <main className="container mx-auto px-4 mt-8">
                <div className="bg-white rounded-md">
                    <article className="flex gap-4 py-4 border-b border-b-gray-400 py-4 px-4">
                        <button className="rounded-full border-2 inline-block h-6 w-6 flex-none"></button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CroosIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 py-4 border-b border-b-gray-400 py-4 px-4">
                        <button className="rounded-full border-2 inline-block h-6 w-6 flex-none"></button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CroosIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 py-4 border-b border-b-gray-400 py-4 px-4">
                        <button className="rounded-full border-2 inline-block h-6 w-6 flex-none"></button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CroosIcon />
                        </button>
                    </article>

                    <section className="py-4 px-4 flex justify-between">
                        <span className="text-gray-400"> 5 items left</span>
                        <button className="text-gray-400">
                            Clear Complete
                        </button>
                    </section>
                </div>
            </main>

            <section className="container px-4 mx-auto mt-8">
                <div className="bg-white p-4 rounded flex justify-center gap-4">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>

            <p className="text-center mt-8">Drag and drop to reorder list</p>
        </div>
    );
};

export default App;
