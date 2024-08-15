// ~/composables/usePokemon.ts
export const useDataUser = () => {
    const { data:test, status, error }
        = useFetch('https://pokeapi.co/api/v2/pokemon/ditto')
    return { test, status, error }
}


