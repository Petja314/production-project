// eslint-disable-next-line no-undef
export function getQueryParams(params : OptionalRecord<string, string>) {
    const searchParams = new URLSearchParams(window.location.search)
    Object.entries(params).forEach(([name, value]) => {
        if(value !== undefined) {
            searchParams.set(name, value)
        }
    })
    return `?${searchParams}`
}

/**
 * Function adding url params
 * @param params
 */

// eslint-disable-next-line no-undef
export function addQueryParams(params : OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params))
}

// export function addQueryParams(params : OptionalRecord<string, string>) {
//     const searchParams = new URLSearchParams(window.location.search)
//     Object.entries(params).forEach(([name, value]) => {
//         if(value !== undefined) {
//             searchParams.set(name, value)
//         }
//     })
//     window.history.pushState(null, '', `?${searchParams.toString()}`)
// }
