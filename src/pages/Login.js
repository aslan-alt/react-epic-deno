import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../stores';

const Component = observer(() => {
    const { AuthStore } = useStores()

    const bindChange = e => {
        AuthStore.setUsername(e.target.value)
    }
    return (
        <>
            Login:{AuthStore.values.username}
            <input type="text" placeholder="cxc" onChange={bindChange} />
        </>
    );
})

export default Component;
