let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } =req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        console.log(messages);
        res.status(200).send(messages);
    },
    update: (req, res) => {
        let { text } = req.body;
        let updateID = req.params.id;
        let messageIndex = messages.findIndex( message => message.id == updateID );
        let message = messages[ messageIndex ];
        
        
    },
    delete: (req, res) => {
        let index = null;
        books.forEach((book, i) => {
            if(book.id === number(req.params.id)) index = i; 
        })
        books.splice(index, 1)
        res.status(200).send(books);
    }
};