'use strict';

// Here we define the transactions

const namespace = 'org.peach.network';

/**
 * Change owner transaction
 * @param {org.peach.network.transfer_peach} tx - transfer_peach
 * @transaction
 */

async function transfer_peach(tx) {
    let peachRegistry = await getAssetRegistry(namespace + '.Peach');
    try {
        let peach = await peachRegistry.get(tx.peach_id);
        peach.owner = tx.new_owner;
        await peachRegistry.update(peach);
    } catch (error) {
        console.error(error);
    }
}


