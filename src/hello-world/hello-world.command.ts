import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'hello-world',
  description: 'Prints a greeting message',
})
export class HelloWorldCommand extends CommandRunner {
  run(_inputs: string[], _options: Record<string, any>): Promise<void> {
    console.log('Hello, world!');
    return Promise.resolve();
  }
}
