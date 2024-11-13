
export const DesktopCards = ({ cards }) => {

    return(

        <div className="sm:flex hidden justify-between items-stretch">
            {cards.map((card, index) => (
              <div
                key={index}
                className="text-center justify-between bg-white shadow-md w-full sm:w-1/2 lg:w-1/3 mx-4 p-6 rounded-lg border border-gray-200"
              >
                <p className="justify-self-center font-bold text-gray-700 mb-2 w-3/4">{card.title}</p>
                <p className="text-xl font-semibold text-green-500">{card.balance}</p>
              </div>
            ))}
          </div>
    )
}