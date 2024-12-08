import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";
import {
  OpenAIInstrumentation,
  isPatched,
} from "@arizeai/openinference-instrumentation-openai";
import { registerInstrumentations } from "@opentelemetry/instrumentation";

export { isPatched };

const provider = new NodeTracerProvider();
provider.register();

registerInstrumentations({
  instrumentations: [new OpenAIInstrumentation()],
});
