import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
        // After selecting a location, close the suggestions panel and open vehicle selection
        setVehiclePanel(true);
        setPanelOpen(false);
    }

    return (
        <div className='space-y-4 max-h-[60vh] overflow-y-auto pr-2'>
            {suggestions.length === 0 ? (
                <div className='flex flex-col items-center justify-center py-20 opacity-20'>
                    <i className="ri-search-line text-6xl mb-4"></i>
                    <p className='text-sm uppercase tracking-widest'>Start typing to search</p>
                </div>
            ) : (
                suggestions.map((elem, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleSuggestionClick(elem)}
                        className='group flex gap-5 p-4 bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 rounded-2xl items-center cursor-pointer transition-all duration-300 active:scale-[0.98]'
                    >
                        <div className='flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                            <i className="ri-map-pin-fill text-primary text-xl"></i>
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='text-white font-semibold text-base line-clamp-1'>{elem}</h4>
                            <p className='text-white/40 text-xs uppercase tracking-wider'>Location Point</p>
                        </div>
                        <i className="ri-arrow-right-s-line ml-auto text-white/20 group-hover:text-primary transition-colors"></i>
                    </div>
                ))
            )}
        </div>
    )
}

export default LocationSearchPanel