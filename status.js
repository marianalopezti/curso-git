function createError (code, msg) {
    const err = new Error(msg || HttpStatus.getStatusText(code))
    err.statusCode = code
    return err
}