const dataUtils = require("./data")
const print = require('./print')
const space = '--------------------------------------------------'
const player = dataUtils.playerHands
const dealer = dataUtils.dealerHand

const roundResults = () => {
    print(`Round ${dataUtils.roundNum} results: `)
    print(space)
    if (dealer.isBlackJack) {
        print(`Dealer: Blackjack`)
    } else if (dealer.sum > 21) {
        print('Dealer bust')
    } else {
        print(`Dealer sum: ${dealer.sum}`)
    }
    print(space)

    for (let i = 0; i < dataUtils.playerHands.length; i++) {
        if (player[i].isPlayerActive) {
            //scenarios if player or dealer get blackjack
            if (player[i].isBlackjack && dealer.isBlackJack) {
                print(`${player[i].name}: Blackjack -- Push`)
                player[i].bank += player[i].bet
            } else if (player[i].isBlackjack && !dealer.isBlackJack) {
                print(`${player[i].name}: Blackjack! -- ${player[i].name} wins!`)
                player[i].bank += player[i].bet * 2.5
                player[i].roundsWon ++
            } else if (!player[i].isBlackjack && dealer.isBlackJack) {
                print(`${player[i].name}'s sum: ${player[i].sum} -- The dealer won`)
            } else if (player[i].sum > 21 && dealer.isBlackJack) {
                print(`${player[i].name}'s sum: ${player[i].sum} -- ${player[i].name} bust -- The dealer won`)
            }
            //scenarios if player or dealer bust 
            else if (player[i].sum > 21 && dealer.sum > 21) {
                print(`${player[i].name}'s sum: ${player[i].sum} -- ${player[i].name} Bust! -- Push `)
                player[i].bank += player[i].bet
            } else if (player[i].sum > 21 && dealer.sum <= 21) {
                print(`${player[i].name}'s sum: ${player[i].sum} -- bust! The dealer won`)
            } else if (player[i].sum <= 21 && dealer.sum > 21) {
                print(`${player[i].name}'s sum: ${player[i].sum} -- ${player[i].name} won!`)
                player[i].bank += player[i].bet * 2
                player[i].roundsWon ++
            }
            //if neither player nor dealer bust 
            else if (player[i].sum > dealer.sum) {
                print(`${player[i].name}'s sum: ${player[i].sum} -- ${player[i].name} won!`)
                player[i].bank += player[i].bet * 2
                player[i].roundsWon ++
            } else if (player[i].sum === dealer.sum) {
                print(`${player[i].name}'s sum: ${player[i].sum} -- Push`)
                player[i].bank += player[i].bet
            } else {
                print(`${player[i].name}'s sum: ${player[i].sum} -- The dealer won`)
            }
        }
    }
    print(space)
}

module.exports = { roundResults }