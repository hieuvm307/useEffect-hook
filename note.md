# Sử dụng useEffect dùng để thực hiện các sideEffect
- update dom 
- call api
- listen dom events
- cleanup

# useEffect(callback)
- Gọi callback mỗi khi component re-render
- Gọi callback sau khi component mounted vào dom 

# useEffect(callback, [])
- Chỉ gọi callback 1 lần sau khi component mounted vào dom

# useEffect(callback, [dependencies])
- Callback sẽ được gọi lại sau khi dependency thay đổi

--------------------------------

- 1. Callback luôn luôn được gọi sau khi component mounted. 
- 2. Cleanup function luôn được gọi trước khi component unmounted
- 3. cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)