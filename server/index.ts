import { z } from 'zod';
import { publicProcedure, router } from './trpc';

const appRouter = router({
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;

    // Retrieve the user with the given ID
    // const user = await db.user.findById(input);

    return user;
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
