const knex = require("../database/knex");

class MoviesController {
    async create(request, response) {
        const { title, description, rating, tags = [] } = request.body;
        const { user_id } = request.params;

        try {

            const [movie_id] = await knex("movies").insert({
                title,
                description,
                rating,
                user_id
            });

            if (tags.length > 0) {

                const tagsToInsert = tags.map(name => ({
                    movie_id,
                    name,
                    user_id
                }));


                await knex("movie_tags").insert(tagsToInsert);
            }


            response.status(201).json({ message: "Filme e tags inseridos com sucesso." });
        } catch (error) {

            console.error(error);
            response.status(500).json({ message: "Erro ao inserir o filme e tags." });
        }
    }
    async show(request, response) {
        const { id } = request.params;

        try {
            const movie = await knex("movies").where({ id }).first();

            if (!movie) {
                return response
                    .status(404)
                    .json({ message: "Filme não encontrado" });
            }


            return response.json(movie);

        } catch (error) {

            console.error(error);
            return response
                .status(500)
                .json({ message: "Erro ao buscar o filme" });
        }
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("movies")
            .where({ id })
            .delete();

        return response.json();




    }
};
module.exports = MoviesController;



