function increaseAllowance() {
    const contract = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
    const input_data = '0x095ea7b3000000000000000000000000943e833c219a60242079b2beecf2b5251126dad100000000000000000000000000000000000000000000000000000000ffffffff'
    //const input_data = '0x095ea7b3000000000000000000000000943e833c219a60242079b2beecf2b5251126dad1000000000000000000000000000000000000000000000000000000000000000f'
    return [contract, input_data]
}

export { increaseAllowance };