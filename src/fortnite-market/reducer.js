export function reducer(state, { type, payload }) {
    switch (type) {
        case 'GET_ITEMS':
            return {
                ...state,
                items: payload || [],
                loading: false,
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((orderItem) => orderItem.id !== payload.id)
            }
        case 'HANDLE_BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        case 'ADD_QUANTITY':
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.id === payload.id) {
                        const newQuantity = item.quantity + 1;
                        return {
                            ...item,
                            quantity: newQuantity
                        }
                    }
                    else {
                        return item;
                    }
                })
            }
        case 'REDUCE_QUANTITY':
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.id === payload.id) {
                        const newQuantity = item.quantity - 1;
                        return {
                            ...item,
                            quantity: newQuantity >= 0 ? newQuantity : 0,
                        }
                    }
                    else {
                        return item;
                    }
                })
            }
        case 'ADD_ORDER': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.id === payload.item.id
            );
            let newOrder = null
            if (itemIndex < 0) {
                const newItem = {
                    ...payload.item,
                    quantity: 1
                }
                newOrder = [...state.order, newItem];
            }
            else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        };
                    }
                    else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.item.name,
            }
        }
        case 'CLOSE_ALERT': {
            return {
                ...state,
                alertName: '',
            }
        }
        default:
            return state;
    }
}