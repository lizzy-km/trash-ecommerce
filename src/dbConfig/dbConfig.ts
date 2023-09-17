import mongoose from 'mongoose'
export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('MoongoDb Connected Successfully!');
        });

        connection.on('error', (err) => {
            console.log('Connection Error. Please mkae sure moongoDb is running.' + err);
            process.exit();
            
        })

	console.log('Connected to MongoDB');
    } catch (error) {
	console.log(error);
    }
}
    
