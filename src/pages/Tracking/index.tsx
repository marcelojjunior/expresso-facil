import { useCorreios } from "../../hooks/useCorreios"

export default function Tracking() {
    const { tracking, getTracking } = useCorreios()

    function handleTracking() {
        getTracking('NM275679471BR')
    }

    return (
        <main className="container mx-auto">
            Rastreio
            <button
                onClick={handleTracking}
            >
                Rastrear
            </button>
            <div className="mt-5">
                {JSON.stringify(tracking)}
            </div>
        </main>
    )
}
