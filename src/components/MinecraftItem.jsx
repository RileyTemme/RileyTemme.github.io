import { useState } from "react"
import useFetch from "../hooks/useFetch"

const items =  [
    "diamond",
    "netherite_ingot",
    "diamond_sword",
    "netherite_sword",
    "dragon_head",
    "elytra",
    "totem_of_undying",
    "enchanted_golden_apple",
    "beacon",
    "nether_star",
    "trident",
    "mace",
    "bow",
    "crossbow",
    "turtle_helmet"

]

const emptyImageStyle = {
    width: "100px",
    height: "100px",
    display: "inline-block"
}

const getRandomItem = items => {

        return items[Math.floor(Math.random() * items.length)]

}

const normalizeQuery = raw =>
    raw.trim().toLowerCase().replace(/\s+/g, "_")

const MinecraftItem = () => {
    const [ item, setItem ] = useState(() => items[Math.floor(Math.random() * items.length)])
    const [ query, setQuery ] = useState("")
    const { data, loading, error } = useFetch(`https://blocksitems.com/api/2026.1.3/items/minecraft:${item}`)

    const itemData = data?.data
    const name = itemData?.display_name


    const searchItem = e => {
        e.preventDefault()
        const normalized = normalizeQuery(query)
        if (!normalized) return
        setItem(normalized)
    }

    return (
        <div>
            <h2>
                Get a Minecraft Item
            </h2>
            <h2>{name}</h2>
            {loading && <p>Loading item...</p>}
            {error && <p>Item not found</p>}
            {itemData
                ? <img src={itemData.icon_url} alt={name} width="100" height="100" />
                : <div style={emptyImageStyle}></div>}
            <br />
            <div className="section-manager">
                <button onClick={() => setItem(() => getRandomItem(items))}>
                    Random Item
                </button>
            </div>
            <form className="section-manager" onSubmit={searchItem}>
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search for an item..."
                    required
                />
                <button type="submit">
                    Search Item
                </button>
            </form>
        </div>
    )
}

export default MinecraftItem
