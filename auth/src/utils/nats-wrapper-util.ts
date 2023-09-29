import nats, { Stan } from 'node-nats-streaming';

/**
 * To create and initialise a Nats client and stan
 */
class NatsWrapper {
    private _client?: Stan;

    /**
     * Method to get the current NatsWrapper client if is defined
     * @return  nats.Stan the NatsWrapper _client
     */
    get client() {
        if (!this._client) {
            throw new Error('Cannot access NATS client before connecting');
        }

        return this._client;
    }

    /**
     * Method to connect a service to the NATS streaming event bus
     * @param clusterId
     * @param clientId
     * @param url
     */
    connect(clusterId: string, clientId: string, url: string) {
        this._client = nats.connect(clusterId, clientId, { url });

        return new Promise<void>((resolve, reject) => {
            this.client.on('connect', () => {
                console.log('Connected to NATS');
                resolve();
            });
            this.client.on('error', (err) => {
                reject(err);
            });
        });
    }
}

export const natsWrapper = new NatsWrapper();