const models = require('../models/cards')

const getAll = (req, res, next) => {
  const userId = req.params.user_id
  const deckId = req.params.deck_id

  models.getAll(userId, deckId)
    .then(cards => {
      res.send(cards)
    })
    .catch(next)
}

const getOne = (req, res, next) => {
  const userId = req.params.user_id
  const deckId = req.params.deck_id
  const cardId = req.params.card_id

  models.getOne(userId, deckId, cardId)
    .then(card => {
      if (!card) {
        next({ status: 400, error: "card not found" })

      } else {
        res.send(card)
      }
    })
}

const create = (req, res, next) => {
  const userId = req.params.user_id
  const deckId = req.params.deck_id
  const newCard = req.body

  models.create(userId, deckId, newCard)
    .then(card => {
      if (!card) {
        next({ status: 400, error: "card not found" })
      }
    })
}

module.exports = { getAll, getOne, create }
