export function assertPage(page, assert, options = {}) {
    const { path, title } = options

    assert.beVisible(page.elementVisualKey())
    
    if (path) {
        assert.eq(page.locationPathname(), path)
    }

    if (title) {
        assert.eq(page.title(), title)
    }

}
