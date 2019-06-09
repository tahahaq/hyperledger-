'use strict';

// Here we define the transactions

const namespace = 'org.peach.network';

/**
 * Change owner transaction
 * @param {org.peach.network.transfer_peach} tx - transfer_peach
 * @transaction
 */

async function transfer_peach(tx) {
    let pineRegistry = await getAssetRegistry(namespace + '.Peach');
    try {
        let peach = await pineRegistry.get(tx.peach_id);
        peach.owner = tx.new_owner;
        await pineRegistry.update(peach);
    } catch (error) {
        console.error(error);
    }
}


