export interface CommandInterface {
  execute(): Promise<string>
}
