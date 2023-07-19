import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"
import Card from "../Components/Card"




export default function Home() {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

    const cardData = [{
        cardTitle: "What is Lorem Ipsum?",
        cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    }, {
        cardTitle: "What is Lorem Ipsum?",
        cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    }]

    return (
        <main className={`h-screen w-screen transition-all duration-200 ease-in-out flex flex-col ${isDarkMode ? "bg-black" : "bg-white"}`}>
            <div className="w-full h-[10%] border-b  justify-between flex px-2">
                <div className="w-[10%]  flex transition-all duration-300">
                    <div className={`font-semibold text-xl m-auto ${isDarkMode ? "text-white" : "text-black"}`}>Basic Context</div>

                </div>
                <div className="font-semibold my-auto  transition-all duration-300 flex">
                    <label className={` my-auto mr-2 ${isDarkMode ? "text-white" : "text-black"}`}>Light{" "} </label>
                    <div
                        className="w-16 overflow-hidden h-8 border-2 rounded-full flex  bg-black  "
                        onClick={() => {
                            toggleDarkMode()

                        }}
                    >
                        <div
                            className={`h-6 w-6 bg-white rounded-full my-auto focus:ring-2 transition-delay-300 ease-in-out duration-200   ${isDarkMode
                                ? " translate-x-9 bg-purple-700 mr-0.5 border-2 "
                                : "bg-gray-400 ml-0.5"
                                }`}
                        ></div>

                    </div>
                    <label className={` my-auto ml-1 ${isDarkMode ? "text-white" : "text-black"}`}>Dark </label>
                </div>


            </div>
            <section className={`w-full h-full p-6 flex ${isDarkMode ? "text-white" : "text-black"}`}>
                <div className="m-auto w-1/2 h-4/6 border rounded-md flex p-1">
                    {cardData.map((eachCardValue, index) => (
                        <Card title={eachCardValue.cardTitle} description={eachCardValue.cardDescription} key={index} />
                    ))}
                </div>
            </section>
        </main>
    )
}
