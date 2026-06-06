(function(Scratch) {
  'use strict';

  class AIExtension {
    getInfo() {
      return {
        id: 'aiextension',
        name: 'AI',
        blocks: [
          {
            opcode: 'askAI',
            blockType: Scratch.BlockType.REPORTER,
            text: 'chiedi IA [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'ciao'
              }
            }
          }
        ]
      };
    }

    async askAI(args) {
      const prompt = encodeURIComponent(args.TEXT);
      const url = `https://dadatop-turingtest.hf.space/ai?prompt=${prompt}`;

      try {
        const res = await fetch(url);
        const text = await res.text();
        return text;
      } catch (e) {
        return 'Errore: ' + e;
      }
    }
  }

  Scratch.extensions.register(new AIExtension());
})(Scratch);
