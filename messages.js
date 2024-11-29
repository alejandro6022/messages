/*message parts*/

let actionVerbs = [
    'Build', 'Organize', 'Create', 'Develop', 'Improve', 'Streamline', 'Achieve', 'Optimize', 'Plan', 'Execute'
];

let adjectives = [
    'efficient', 'productive', 'innovative', 'focused', 'seamless', 'strategic', 'high-quality', 'impactful', 'dynamic', 'proactive'
];

let nouns = [
    'workflow', 'solution', 'strategy', 'goal', 'system', 'team', 'vision', 'framework', 'process', 'initiative'
];

let adverbs = [
    'efficienly', 'quickly', 'creatively', 'proactively', 'seamlessly', 'strategically', 'consistenly', 'effectively', 'diligently', 'resourcefully'
];

let contexts = [
    'in your daily routine', 'while collaborating with your team', 'for long-term growth', 'to achieve your goals', 'in high-pressure situations', 'when planning for success',
    'to drive innovation', 'for personal improvement'
];

/*create the message function*/

const generatePhrase = () => {
    const verb = actionVerbs[Math.floor(Math.random() * actionVerbs.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const adverb = adverbs[Math.floor(Math.random() * adverbs.length)];
    const context = contexts[Math.floor(Math.random() * contexts.length)];
    const phrase = `${verb} your ${adjective} ${noun} ${adverb} ${context}`
    return phrase
}

console.log(generatePhrase());

/*weekend phrase to motivate yourself */

const weekendPhrase = {
    motivationalStarts: [
        'You are capable of more than you think',
        'Success starts with the first step',
        'Progress, not perfection, is the goal',
        'Small steps lead to big results',
        'Focus on what matters most',
        'Every challenge is an opportunity',
        'Discipline is the bridge to success',
        'Consistency beats intensity',
        'Dream big, act small',
        'Your efforts will pay off'
    ],
    inspirationalEndings: [
        'and stay focused on the journey.', 'and accomplish your goals.', 
        'and unlock your potential.', 'and create your legacy.', 
        'and embrace the challenge.', 'and push boundaries.', 
        'and set new standards.', 'and make the impossible possible.', 
        'and leave a mark.', 'and stay consistent.'
    ]
};

const motivationalStart = weekendPhrase.motivationalStarts[Math.floor(Math.random() * weekendPhrase.motivationalStarts.length)]
const inspirationalEnd = weekendPhrase.inspirationalEndings[Math.floor(Math.random() * weekendPhrase.inspirationalEndings.length)]
console.log(motivationalStart, inspirationalEnd)