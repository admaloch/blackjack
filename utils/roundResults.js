const dataUtils = require("./data")

const roundResults = () => {
    const player = dataUtils.playerHands
    const dealer = dataUtils.dealer
    for (let i = 0; i < dataUtils.playerHands.length; i++) {
        
        if (dealer.isBlackjack === true) {
            print(`Dealer: Blackjack`)
        } else {
            print(`Dealer score: ${dealer.sum}`)
        }
        //both player and dealer get blackjack
        if (player[i].isBlackjack === true && dealer.isBlackjack === true) {
            print(`${player[i].name}: Blackjack -- Push`)
            player[i].bank += player[i].bets
        }//player[i] gets blackjack
        if (player[i].isBlackjack === true && dealer.isBlackjack === false) {
            print(`${player[i].name}: Blackjack -- ${player[i].name} wins!`)
            player[i].bank += player[i].bet * 2.5
        }//dealer gets blackjack
        if (player[i].isBlackjack === false && dealer.isBlackjack === true) {
            print(`The dealer won`)
        }//both player[i] and dealer bust
        if (player[i].sum > 21 && dealer.sum > 21) {
            print(`${player[i].name}'s score: ${player[i].sum} -- ${player[i].name} Bust! -- Push `)
            player[i].bank += player[i].bet
        }//player[i] busts
        if (player[i].sum > 21 && dealer.sum < 21) {
            print(`${player[i].name}'s score: ${player[i].sum} -- ${player[i].name} bust! The dealer won`)
        }//dealer busts
        if (player[i].sum < 21 && dealer.sum > 21) {
            print(`${player[i].name}'s score: ${player[i].sum} -- ${player[i].name} won!`)
            player[i].bank += player[i].bet * 2
        }//player[i] wins
        if (player[i].sum > dealer.sum) {
            print(`${player[i].name}'s score: ${player[i].sum} -- ${player[i].name} won!`)
            player[i].bank += player[i].bet * 2
        }//dealer wins
        else {
            print(`${player[i].name}'s score: ${player[i].sum} -- The dealer won`)
        }
    }
}
module.exports = { roundResults }